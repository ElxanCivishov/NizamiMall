import { Meta, BreadCrumb } from "../../components/layout";

const SingleBlog = () => {
  return (
    <div>
      <Meta title="MT-15-in yeni versiyası" />
      <BreadCrumb
        title="MT-15-in yeni versiyası"
        path="/blogs"
        prev="Yeniliklər"
      />
      <section className="container p-4">
        <div className="p-3 bg-white rounded-lg my-4">
          <div class="p-4">
            <div className=" min-h-[150px] md:h-full">
              <img
                class="h-full w-full max-w-full object-contain rounded-lg"
                src="https://images.unsplash.com/photo-1638517900432-6ee4655d76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXQxNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div className="p-4 flex flex-col gap-2 col-span-3">
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
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
