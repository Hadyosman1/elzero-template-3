import Image from "next/image";
import styles from "./articles.module.css";

import article1Pic from "./../../../../public/imgs/cat-01.jpg";
import article2Pic from "./../../../../public/imgs/cat-02.jpg";
import article3Pic from "./../../../../public/imgs/cat-03.jpg";
import article4Pic from "./../../../../public/imgs/cat-04.jpg";
import article5Pic from "./../../../../public/imgs/cat-05.jpg";
import article6Pic from "./../../../../public/imgs/cat-06.jpg";
import article7Pic from "./../../../../public/imgs/cat-07.jpg";
import article8Pic from "./../../../../public/imgs/cat-08.jpg";

const articles = [
  {
    img: article1Pic,
    title: "The Secrets of Cat Behavior",
    description:
      "Discover the fascinating world of cats and what their behavior tells us about their needs.",
  },
  {
    img: article2Pic,
    title: "Top 10 Cat Breeds for Families",
    description:
      "Explore the best cat breeds that are perfect for families with children.",
  },
  {
    img: article3Pic,
    title: "Understanding Your Cat’s Meow",
    description:
      "Learn how to interpret the different types of meows and what your cat is trying to communicate.",
  },
  {
    img: article4Pic,
    title: "5 Tips for Keeping Your Cat Healthy",
    description:
      "Essential tips for maintaining your cat's health and well-being.",
  },
  {
    img: article5Pic,
    title: "The History of Domesticated Cats",
    description:
      "A journey through the history of how cats became our beloved companions.",
  },
  {
    img: article6Pic,
    title: "Cat Nutrition 101",
    description:
      "Everything you need to know about providing your cat with a balanced diet.",
  },
  {
    img: article7Pic,
    title: "Creating a Cat-Friendly Home",
    description:
      "Ideas for making your home a paradise for your feline friend.",
  },
  {
    img: article8Pic,
    title: "How to Introduce Cats to Each Other",
    description:
      "A step-by-step guide to ensuring a smooth introduction between your pets.",
  },
];

import { FaArrowRightLong } from "react-icons/fa6";

const Articles = () => {
  return (
    <section id="articles">
      <div className="container main-section-padding">
        <h2 className="section-main-title">Articles</h2>
        <div className={styles.articles}>
          {articles.map((article, idx) => (
            <article key={idx} className={styles.article}>
              <div>
                <Image src={article.img} alt="article" width={300} />
              </div>
              <div>
                <h3>Test Title</h3>
                <p className="line-clamp-3">{article.description}</p>
              </div>
              <a href="#">
                Read More <FaArrowRightLong />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
