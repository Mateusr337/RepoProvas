import { Container, Main, SubTitle, Title } from "./style";
import { BiArrowToLeft, BiArrowToBottom } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Topic({
  children,
  tests,
  filterElement,
  subFilterElement,
}) {
  const [showMore, setShowMore] = useState(false);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    let titlesArray = [];

    tests.map((test) => {
      if (!titlesArray.includes(elementSearch(test))) {
        titlesArray.push(elementSearch(test));
      }
    });

    setTitles(titlesArray);
  }, [tests]);

  function returnSubtitle(test) {
    if (subFilterElement === "teacher")
      return [test.teacherDiscipline.teacher.name, test.category.name];
    if (subFilterElement === "discipline")
      return [
        test.teacherDiscipline.discipline.name,
        test.teacherDiscipline.discipline.term.number + "° T",
      ];
  }

  function elementSearch(test) {
    if (filterElement === "discipline")
      return test.teacherDiscipline.discipline.name;
    if (filterElement === "category") return test.category.name;
  }

  return (
    <>
      <Container onClick={() => setShowMore(showMore ? false : true)}>
        {children}
        {showMore ? <BiArrowToBottom size={30} /> : <BiArrowToLeft size={30} />}
      </Container>

      {showMore && (
        <Main>
          {titles.map((title, i) => (
            <>
              <Title key={i}>
                <BsArrowReturnRight /> {title?.toUpperCase()}
              </Title>

              {tests.map((test, index) => {
                if (elementSearch(test) === title)
                  return (
                    <SubTitle target="_blank" href={test.pdfUrl} key={index}>
                      {test.name} - {returnSubtitle(test)[0]} -{" "}
                      {returnSubtitle(test)[1].toUpperCase()}
                    </SubTitle>
                  );
              })}
            </>
          ))}
        </Main>
      )}
    </>
  );
}
