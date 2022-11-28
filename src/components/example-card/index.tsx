import './styles.css';

export default function ExampeCard() {
  return (
    <div className="border rounded-lg w-[300px] mt-4 mx-auto p-4 bg-white text-slate-700">
      <h2 className="font-bold text-3xl text-center mb-4">Heading</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatibus deleniti quis error eaque unde,
        ratione debitis explicabo dicta aliquam suscipit! Obcaecati, iste a? Molestiae repudiandae et aliquam
        perspiciatis suscipit?
      </p>
      <div className="flex gap-4">
        <button type="button" className="btn bg-slate-700 text-white">
          Add
        </button>
        <button type="button" className="btn">
          Info
        </button>
      </div>
    </div>
  );
}
