import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
       Lolo Durante 
      </h1>
      <p className="mb-4">
        {`Soy un desarrollador web full stack y estudiante de Licenciatura en Ciencias de la Computación en la UBA. Algunos de mis intereses son startups, blockchain y ecommerce. Prev: Valtech, Coderhouse.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
