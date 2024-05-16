export default function ColorBox({ children, left, right }) {
  return (
    <section>
      {children}
      {/* {left} */}.{right}
    </section>
  );
}
