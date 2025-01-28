export default function Cover({img,title,text}) {
    return (
      <div>
        <div
    className="hero h-[550px] bg-fixed"
    style={{
      backgroundImage: `url("${img}")`
    }}>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-2xl mt-10 px-10 py-8 hero-overlay bg-opacity-60">
        <h1 className="mb-5 text-4xl font-bold">{title}</h1>
        <p className="mb-5">
          {text}
        </p>
      </div>
    </div>
  </div>
      </div>
    )
  }