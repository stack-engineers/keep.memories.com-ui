import NavigationBarComponent from "../../components/Navigation.Bar.Component";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PhotoViewComponent from "../../components/Photo.View.Component";
import FooterComponent from "../../components/Footer.Component";
import ScrollGalleryComponent from "../../components/Scroll.Gallery.Component";
import WelcomeCookieAlertMessage from "../../components/Welcome.Cookie.Alert.Message.Component";
import { LuDownload } from "react-icons/lu";

interface Resource {
  id: string;
  resource: string;
  category: string;
  resource_admin: string;
  resource_title: string;
  resource_id: string;
  upload_date: string | number;
}

import adminContext from "../../context/adminContext";
import AdvertComponent from "../../components/Advert.Component";

interface AdminObject {
  login_id: string;
  username: string;
  email: string;
  token: string;
  message: string;
  status: string;
  signedUp: boolean | string;
  date: string;
}

type Admin = string;
import OfflineMessageComponent from "../../components/Offline.Message.Component";

function Animals() {
  const context: Admin = useContext(adminContext) as Admin;
  const adminObject: AdminObject = JSON.parse(context);

  const [resources, setResources] = useState<Resource[]>([]);

  async function FetchResources() {
    try {
      const request = await axios.get(
        "https://keep-memories-com-api.onrender.com/resources",
        {
          headers: {
            Authorization: `Bearer ${adminObject?.token}`,
          },
        }
      );

      const response = await request.data;

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component-2") as HTMLElement
        ).style.display = "none";
        await setResources(
          response.filter((index: Resource) => {
            return index.category === "animals";
          })
        );
      }, 6000 as number);
    } catch (error) {
      console.log(error);
      console.warn("Connection to server was lost...");
      console.warn("Reconnecting to server...");
      console.warn("Connecting...");

      window.setTimeout(async () => {
        (
          window.document.querySelector(".loader-component-2") as HTMLElement
        ).style.display = "none";
      }, 6000 as number);
    }
  }

  useEffect(() => {
    FetchResources();
  }, [resources]);

  // console.log(resources);

  try {
    return resources.length > 0 ? (
      <>
        <NavigationBarComponent />
        <br />
        <section className="animals">
          <h1>Beautiful photos from animals</h1>
          <p>
            Get all your favorite photos and downloads from one place to your
            local machine. Fugiat voluptatum facere deleniti commodi! Debitis
            nesciunt eveniet eius voluptatem illo illum quam.
          </p>
          <br />
          <div className="photos">
            {resources.map((index: Resource) => (
              <article
                className="photo_resource"
                key={index.id}
                title={`photo uploaded by ${index.resource_admin}`}
              >
                <div className="before_wrapper">
                  <a href={`/uploads/${index.resource}`} download>
                    <button type="button">
                      <LuDownload />
                    </button>
                  </a>
                </div>
                <img
                  src={`/uploads/${index.resource}`}
                  alt={`photo from ${index.category}`}
                  onClick={(event) => {
                    event.stopPropagation();

                    (
                      window.document.querySelector(
                        ".photo-view"
                      ) as HTMLElement
                    ).style.display = "flex";
                    (
                      window.document.querySelector(
                        ".img-placeholder"
                      ) as HTMLImageElement
                    ).src = (event.target as HTMLImageElement).src;
                  }}
                />
                <div className="photo-details">
                  <section></section>
                </div>
              </article>
            ))}
          </div>
          <br />
          <span>
            Found {(resources as Resource[])?.length} photos from this category.
          </span>
          <br />
          <br />
          <aside className="loader-component-2">
            <div className="spinner"></div>
          </aside>
        </section>
        <ScrollGalleryComponent />
        <WelcomeCookieAlertMessage />
        <OfflineMessageComponent />
        <PhotoViewComponent />
        <FooterComponent />
      </>
    ) : (
      <>
        <NavigationBarComponent />
        <div className="no-results-found">
          <strong>Opps, no photos found!</strong>
          <p>
            Looks like no photos were found or reloaded from the database, try
            reloading the page to refetch the photos from our databases.
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              window.location.reload();
            }}
          >
            Try Again
          </button>
          <aside className="loader-component-2">
            <div className="spinner"></div>
          </aside>
        </div>
        <ScrollGalleryComponent />
        <OfflineMessageComponent />
        <WelcomeCookieAlertMessage />
        <AdvertComponent />
        <FooterComponent />
      </>
    );
  } catch (error) {
    console.error(error);
  }
}

export default Animals;
