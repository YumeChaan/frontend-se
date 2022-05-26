import React from 'react';
import IndexNavBar from '../../Components/IndexHeader/IndexNavBar';
import IndexFooter from '../../Components/IndexFooter/IndexFooter.js';
import InfoCard from '../../Components/InfoCard/InfoCard.js'

import styled from './index.module.css';



export default function HomePage() {
  return (
    <main className={styled["main"]}>
      

      <body className={styled['body']}>
      <IndexNavBar className={styled["header"]} />
        <InfoCard
          cardType={1}
          name={"Gym-image-1.jpg"}
          title={"About us"}
          info={"The team at 24/7 fitness shares a particular interest in the overall care and wellbeing of each of the members. We have an unprecedented ability to cater to women with special needs. Limitaations, or illness and our programs are accessible to all. The friendly community atmosphere gives you personal attention and caters to your individual needs. We are devoted to our community and we strive to include each of our members in an unique fitness experience that leaves them with a sense of value, hope, and wholeness."}
        />
        <InfoCard
          cardType={0}
          name={"Gym-image-2.jpg"}
          title={"WHY YOU NEED FITNESS"}
          info={"The importance of physical activity for human health and wellbeign cannot be overemphasized. besides the benefits discussed above, exercise can also help in having a great sex life due to body, fir example, smooth blood circulation. Another reason to doing fitness is the current pandamic situation in the world COVID-19 which is a virus that require well immune system to recover. Having a good fitness routien and having a good meal plan help you to gain a strong immune system. there are lot more reasons to have a good fitness routine and you will definitly experince them once you join our fitness center"}
        />
        <IndexFooter className={styled["footer"]} />
      </body>
    </main>
  );
}
