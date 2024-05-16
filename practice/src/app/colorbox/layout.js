export default function ColorBox({ children, left, right }) {
  const isSideBar = true;
  return (
    <section>
      {children}
      {isSideBar ? left : right}
    </section>
  );
}
