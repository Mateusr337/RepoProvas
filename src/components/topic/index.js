import { Container, Main, SubTitle, Title } from "./style";
import { BiArrowToLeft, BiArrowToBottom } from "react-icons/bi";
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
      if (!titlesArray.includes(test.teacherDiscipline[filterElement].name)) {
        titlesArray.push(test.teacherDiscipline[filterElement].name);
      }
    });

    setTitles(titlesArray);
  }, [tests]);

  console.log(tests);

  function returnSubtitle(test) {
    if (subFilterElement === "teacher")
      return test.teacherDiscipline.teacher.name;
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
              <Title key={i}>{title}</Title>
              {tests.map((test, index) => {
                if (test.teacherDiscipline[filterElement].name === title)
                  return (
                    <SubTitle target="_blank" href={test.pdfUrl} key={index}>
                      {test.name} - {returnSubtitle(test)}
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
