import { Meta } from "../../components/layout";

const SingleBlog = () => {
  return (
    <div>
      <Meta title="MT-15-in yeni versiyası" />

      <section className="container p-4">
        <div className="p-3 bg-white rounded-lg my-4  grid grid-cols-2 gap-4">
          <div className="p-4 w-full flex flex-col gap-2">
            <p className="text-xs md:text-sm  font-normal text-colorLight">
              18 dec 2023
            </p>
            <div className="flex items-center w-full ">
              <h5 className="text-base md:text-xl font-semibold">
                Ducimus, Lorem ipsum dolor sit amet
              </h5>
            </div>
            <p className="text-xs md:text-sm  font-normal text-colorLight">
              You’re only as good as your last collection, which is an enormous
              pressure. I think there is something about luxury – it’s not I use
              it to buy my freedom. I’ve treated the waistcoat as if it were a
              corset.
            </p>

            <p className="text-xs md:text-sm  font-normal text-colorLight">
              Aenean adipiscing sit scelerisque dictum ullamcorper fames ac
              inceptos est risus auctor ac senectus volutpat viverra ullamcorper
              a nec suscipit posuere sit dis. Enim elit duis.
            </p>

            <p className="text-xs md:text-sm  font-normal text-colorLight">
              Aenean adipiscing sit scelerisque dictum ullamcorper fames ac
              inceptos est risus auctor ac senectus volutpat viverra ullamcorper
              inceptos est risus auctor ac senectus volutpat viverra ullamcorper
              inceptos est risus auctor ac senectus volutpat viverra ullamcorper
              a nec suscipit posuere sit dis. Enim elit duis.
            </p>
          </div>
          <div className="p-4 w-full group">
            <div className=" min-h-[300px] md:h-full overflow-hidden rounded-lg w-full">
              <img
                className="h-full w-full max-w-full object-contain rounded-lg group-hover:scale-110 transition-all duration-200"
                src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
