export default function PopupSucesso({ mensagem, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center max-w-md mx-4">
        <h3 className="text-3xl font-bold text-green-600 mb-4">
          Sucesso!
        </h3>
        <p className="text-lg text-gray-700 mb-8">{mensagem}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}