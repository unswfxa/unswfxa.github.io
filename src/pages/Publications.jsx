import { blogs, newsletters } from "../data/publicationsinfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PublicationsCard } from "../components/Card";

function PublicationsPage() {
  // "blogs" and "newsletters" will have all the info of any blogs and newsletters to post/publish ...

  const createPublicationCards = (items) => {
    // sort items by most recent
    const sort = items.sort((a, b) => {
      if (a.publisdate && b.publisdate) return new Date(b.publishdate) - new Date(a.publishdate);
    });
    // create grid
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pr-4 overflow-y-auto"
        style={{ maxHeight: "300px" }}
      >
        {sort.map((item, index) => (
          <PublicationsCard key={index} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="p-20">
        <h1 className="mt-20 text-7xl font-semibold flex justify-center mb-10 bg-gradient-to-r from-[#014EB1] to-[#31C6E1] bg-clip-text text-transparent">
          Our Publications
        </h1>
        {/* Blogs */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold pb-6">Blogs</h2>
          <p className="text-[#828282]">What’s on in our community and find out more about our impact!</p>
          {createPublicationCards(blogs)}
        </section>
        {/* Newsletters */}
        <section>
          <h2 className="text-4xl font-bold pb-6">Newsletters</h2>
          <p className="text-[#828282]">
            Keep up with trends in the market, what’s new in trading, find out more about foreign exchange and much
            more!
          </p>
          {createPublicationCards(newsletters)}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PublicationsPage;
