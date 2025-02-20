const Airplane = () => {
  return (
    <div style={{ display: "flex" }}>
      <article
        style={{
          borderRadius: "20px",
          border: "1px solid black",
          width: "300px",
          height: "300px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <span>플렉스</span>
        </div>
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "20px" }}>
          <span style={{ fonstSize: "10px" }}>KRW</span>
          <span style={{ fontWeight: "600" }}>294,200</span>
        </div>

        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <span style={{ fontSize: "13px" }}>9석</span>
        </div>
      </article>
    </div>
  );
};
export default Airplane;
