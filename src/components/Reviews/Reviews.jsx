const Welcome = () =>{  

    return(
      <section className="mobil">
        <div className="container ">
          <h2 className="mobil__title">Les avis de nos clients</h2>
          <ul className="flex">
            <li className="reviews">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <p className="mobil__reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ducimus beatae eum molestiae repellat hic molestias cum porro accusantium minima. Possimus doloremque, quia aliquid animi labore fugit numquam repellendus quo.</p>
              <p className="mobil__reviews-name">nom prenom</p>
            </li>
            <li className="reviews">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <p className="mobil__reviews-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, illo rem, fugiat animi in, corporis recusandae facere adipisci maxime exercitationem alias deleniti consequuntur velit laborum. Maxime iure nobis quisquam ipsam!</p>
              <p className="mobil__reviews-name">nom prenom</p>
            </li>
            <li className="reviews">
            <span className="stars">⭐⭐⭐⭐⭐</span>
              <p className="mobil__reviews-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad voluptate reiciendis labore dignissimos aperiam aspernatur enim animi, ab, magni id hic beatae accusamus quae nostrum esse. Officia, ducimus possimus?</p>
              <p className="mobil__reviews-name">nom prenom</p>
            </li>
          </ul>
        </div>
      </section>   
    )
}
export default Welcome;