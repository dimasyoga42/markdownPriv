const Dcos = () => {
  return (
    <div className="flex-col gap-4 space-y-4">
      <h1 className="ml-2 text-2xl font-bold underline underline-offset-2">markdown:</h1>
      <article className="prose ml-2 font-poppins text-white">
        <p>
          Markdown adalah bahasa markup ringan yang dirancang untuk memformat teks menjadi lebih
          rapi dan terstruktur. Diciptakan oleh John Gruber dan Aaron Swartz, Markdown sangat
          populer di kalangan developer dan penulis karena kesederhanaannya dan kemampuannya untuk
          diubah menjadi HTML dengan cepat. Markdown sering digunakan untuk dokumentasi, README
          file, blog post, dan lainnya.
        </p>
      </article>
      <h1 className="ml-2 text-2xl font-bold underline underline-offset-2">syntax markdown:</h1>
      <ul className="ml-2 space-y-2">
        <li>
          <h1 className="text-2xl font-bold">heding</h1>
          <article className="prose text-white">
            <p>
              heding menggunakan # untuk penerapan nya contoh jika ingin menggunakan heding 2 maka
              akan seperti ini <span className="font-bold">## ini heding 2</span> dan seterusnya
            </p>
          </article>
        </li>
        <li>
          <h1 className="text-2xl font-bold">teks tebal</h1>
          <article className="prose text-white">
            <p>
              teks tebal menggunakan **** untuk penerapan nya contoh jika ingin menggunakan teks
              tebal maka akan seperti ini <span className="font-bold">**ini teks tebal**</span>{" "}
            </p>
          </article>
        </li>
        <li>
          <h1 className="text-2xl font-bold">italic</h1>
          <article className="prose text-white">
            <p>
              teks italic menggunakan ** untuk penerapan nya contoh jika ingin menggunakan teks
              tebal maka akan seperti ini <span className="font-bold">*ini teks italic*</span>{" "}
            </p>
          </article>
        </li>
      </ul>
    </div>
  );
};
export default Dcos;
