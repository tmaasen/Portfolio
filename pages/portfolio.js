import Card from "../components/Card/Card";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Projects | Tanner Maasen";
  }, []);
  return (
    <>
      <h1>Portfolio</h1>
      <Card
        title="Trashmosphere"
        description="We got 2nd place in Developer category at TigerHacks 2021!"
        src="/public/images/trashmosphere.png"
      />
    </>
  );
}
