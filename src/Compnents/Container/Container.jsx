const Container = ({ children, className }) => {
  return (
    <section className={`w-11/12 2xl:w-10/12 mx-auto py-6 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
