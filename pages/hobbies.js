import { useEffect } from "react";

export default function Hobbies() {
  useEffect(() => {
    document.title = "Hobbies | Tanner Maasen";
  }, []);
  return (
    <>
      <h1>Hobbies</h1>
    </>
  );
}
