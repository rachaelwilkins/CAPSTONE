//todo: add image to each post.


const posts = [
    {
      id: 1,
      title: 'How to keep your white sneakers white',
      href: '#',
      description:
        'Before you kick your grubby white trainers to the curb, there is a way to return them to their pristine "as new" state.',
      date: 'July 16, 2024',
      datetime: '2024-07-16',
      author: {
        name: 'Millie Allen',
        role: 'White Sneaker Enthusiast',
      },
    },
    {
        id: 2,
        title: 'Your guide to finding the perfect white sneaker',
        href: '#',
        description:
          'I have been on the hunt for the perfect pair of everyday white sneakers. So I decided to order a bunch of popular white sneakers, so I could see what pair felt right. Here, I share the ultimate guide to finding the perfect white sneaker.',
        date: 'July 7, 2024',
        datetime: '2024-07-07',
        author: {
          name: 'Nikki McCully',
          role: 'wsh. Marketing Manager / Sneakerhead',
        },
      },
      {
        id: 3,
        title: 'Unpacking the white sneaker trend',
        href: '#',
        description:
          'The white sneaker is arguably one of the oldest fashion trends that is still in style, and have been an undeniable closet essential since they first hit the shelves in the early 1900s.',
        date: 'July 1, 2024',
        datetime: '2024-07-01',
        author: {
          name: 'Filipo Fifita',
          role: 'wsh. CEO / Sneakerhead',
        },
      },
  ]
  
  export default function Blog() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">from the shoebox.</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              all things white sneakers.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  