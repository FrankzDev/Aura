export default function Price({ price, oldPrice }) {
    return (
      <div className="flex items-center gap-2 font-body">
        <span className="text-base font-medium text-slate-950">${price}</span>
  
        {oldPrice && (
          <span className="text-sm text-red-500 line-through">
            ${oldPrice}
          </span>
        )}
      </div>
    );
  }