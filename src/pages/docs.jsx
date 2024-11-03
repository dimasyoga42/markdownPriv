
const Dcos = () => {
    return (
        <div className="gap-4 flex-col space-y-4">
        <h1 className="font-bold text-2xl ml-2 underline underline-offset-2">markdown:</h1>
        <article className="ml-2 prose font-poppins text-white">
            <p>Markdown adalah bahasa markup ringan yang dirancang untuk memformat teks menjadi lebih rapi dan terstruktur. Diciptakan oleh John Gruber dan Aaron Swartz, Markdown sangat populer di kalangan developer dan penulis karena kesederhanaannya dan kemampuannya untuk diubah menjadi HTML dengan cepat. Markdown sering digunakan untuk dokumentasi, README file, blog post, dan lainnya.</p>
        </article>
        <h1 className="font-bold text-2xl ml-2 underline underline-offset-2">syntax markdown:</h1>
        <ul className="ml-2 space-y-2">
            <li><h1 className="font-bold text-2xl ">heding</h1>
            <article className="prose text-white">
                <p>heding menggunakan # untuk penerapan nya contoh jika ingin menggunakan heding 2 maka akan seperti ini <span className="font-bold">## ini heding 2</span> dan seterusnya</p>

            </article>
            </li>
            <li><h1 className="font-bold text-2xl ">teks tebal</h1>
            <article className="prose text-white">
                <p>teks tebal menggunakan **** untuk penerapan nya contoh jika ingin menggunakan teks tebal maka akan seperti ini <span className="font-bold">**ini teks tebal**</span> </p>
            </article>
            </li>
            <li><h1 className="font-bold text-2xl ">italic</h1>
            <article className="prose text-white">
                <p>teks italic menggunakan ** untuk penerapan nya contoh jika ingin menggunakan teks tebal maka akan seperti ini <span className="font-bold">*ini teks italic*</span> </p>
            </article>
            </li>

        </ul>
        </div>
    );
}
export default Dcos;