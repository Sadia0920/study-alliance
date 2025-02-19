export default function PopularCourses() {
    return (
    <div className="w-10/12 mx-auto my-14">
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* 1 */}
    <div className="card bg-[rgb(76,48,161,0.3)] shadow-xl text-center">
      <div className="card-body">
      <i class="fa-solid fa-shield-halved text-3xl"></i>
      <h2 className="text-xl font-bold">Basics of Math</h2>
      <p className="font-bold">This course covers the fundamental mathematical concepts. Perfect for beginners looking to strengthen their math skills with easy-to-follow explanations and practical exercises.</p>
      </div>
    </div>
    {/* 2 */}
    <div className="card bg-[rgb(76,48,161,0.3)] shadow-xl text-center">
      <div className="card-body">
      <i class="fa-solid fa-shield-halved text-3xl"></i>
      <h2 className="text-xl font-bold">Introduction to AI</h2>
      <p className="font-bold">Dive into the world of AI and learn how machines can think, learn, and make decisions. No prior coding knowledge is required—just curiosity and a willingness to explore!</p>
      </div>
    </div>
    {/* 3 */}
    <div className="card bg-[rgb(76,48,161,0.3)] shadow-xl text-center">
      <div className="card-body">
      <i class="fa-solid fa-shield-halved text-3xl"></i>
      <h2 className="text-xl font-bold">Basics of Graphic Design</h2>
      <p className="font-bold">Unleash your creativity with this introductory course on graphic design. Learn about design principles, color theory, typography, and layout techniques.</p>
      </div>
    </div>
    {/* 4 */}
    <div className="card bg-[rgb(76,48,161,0.3)] shadow-xl text-center">
      <div className="card-body">
      <i className="fa-solid fa-shield-halved text-3xl"></i>
      <h2 className="text-xl font-bold"> Essay Grammar Techniques</h2>
      <p className="font-bold">Improve your writing skills with a structured approach to grammar and essay composition. Essential for students, professionals, and aspiring writers.</p>
      </div>
    </div>
    </div>
    </div>
    )
  }