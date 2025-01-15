export default function Cover({img}) {
    return (
      <div>
        <div
    className="hero h-[500px]"
    style={{
      backgroundImage: `url("${img}")`
    }}>
    <div className=""></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-2xl px-10 py-8 hero-overlay bg-opacity-60">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
      </div>
    )
  }