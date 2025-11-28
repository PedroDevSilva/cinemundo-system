export default function PopupSucesso({ mensagem, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-[#111] border border-[#333] rounded-2xl p-12 max-w-md w-full mx-4 shadow-2xl shadow-yellow-400/20 animate-in zoom-in-95 duration-400">
        
        <h3 className="text-4xl md:text-5xl font-bold text-[#facc15] text-center mb-4 tracking-tight">
          Sucesso!!!
        </h3>

        <p className="text-gray-300 text-lg text-center leading-relaxed mb-10 px-4">
          {mensagem}
        </p>

        <button
          onClick={onClose}
          className="w-full max-w-xs mx-auto bg-transparent border-2 border-[#facc15] text-[#facc15] py-4 px-10 rounded-lg font-bold text-lg 
                     hover:bg-[#facc15] hover:text-black 
                     transition-all duration-300 
                     hover:shadow-2xl hover:shadow-[#facc15]/40 
                     hover:-translate-y-1
                     active:scale-95">OK
        </button>
      </div>
    </div>
  );
}