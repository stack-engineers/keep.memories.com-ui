import NavigationBarComponent from "../components/Navigation.Bar.Component";
import { useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import FooterComponent from "../components/Footer.Component";
import LogoutAlertBox from "../components/Logout.Alert.Box.Component";
import HeaderComponent from "../components/Header.Component";
import PublicPagePhotoCollection from "../components/Public.Photo.Collection.Component";
import AdvertComponent from "../components/Advert.Component";
import ScrollGalleryComponent from "../components/Scroll.Gallery.Component";
// import PhotoViewComponent from "../components/Photo.View.Component";

function PublicPage() {
  const [value, setValue] = useState([
    {
      id: String(uuid()),
      title: "click to view all categories of photos",
      bg_photo: <img src="/photos/select-all.png" alt="" />,
      href: "/photos/categories/all",
      value: "Collection",
    },
    {
      id: String(uuid()),
      title: "click to view people categories of photos",
      bg_photo: <img src="/photos/man.png" alt="" />,
      href: "/photos/categories/people",
      value: "People",
    },
    {
      id: String(uuid()),
      title: "click to view nature categories of photos",
      bg_photo: <img src="/photos/nature.png" alt="" />,
      href: "/photos/categories/nature",
      value: "Nature",
    },
    {
      id: String(uuid()),
      title: "click to view technology categories of photos",
      bg_photo: <img src="/photos/virtual-reality.png" alt="" />,
      href: "/photos/categories/technology",
      value: "Technology",
    },
    {
      id: String(uuid()),
      title: "click to view animals categories of photos",
      bg_photo: <img src="/photos/livestock.png" alt="" />,
      href: "/photos/categories/animals",
      value: "Animals",
    },
    {
      id: String(uuid()),
      title: "click to view dark categories of photos",
      bg_photo: <img src="/photos/dark.png" alt="" />,
      href: "/photos/categories/dark-photos",
      value: "Dark",
    },
    {
      id: String(uuid()),
      title: "click to view illustrations categories of photos",
      bg_photo: <img src="/photos/art.png" alt="" />,
      href: "/photos/categories/illustrations",
      value: "Illustrations",
    },
  ]);

  const ref = useRef(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <>
      <NavigationBarComponent />
      <HeaderComponent />
      <main className={String("public-page")}>
        <br />
        <h1>Explore Categories</h1>
        <section className={String("photos-categories")}>
          {ref.current.map((index) => (
            <Link
              to={index.href}
              key={index.id}
              title={index.title}
              className={index.value}
            >
              {index.value}
            </Link>
          ))}
        </section>
        <LogoutAlertBox />
        <br />
        <br />
        <h1>Get inspired by our selected content</h1>
        <br />
        <br />
        <br />
        <PublicPagePhotoCollection />
        <br />
        <br />
        <br />
        <ScrollGalleryComponent />
        <AdvertComponent />
        <br />
        <br />
      </main>
      <FooterComponent />
    </>
  );
}

export default PublicPage;
