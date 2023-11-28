// show more cards in Catalog Lists
if (window.innerWidth < 768) {
    let catalogLists = document.querySelectorAll('.catalog__slider');
  
    for (let list of catalogLists) {
      let listCards = list.querySelectorAll('.catalog__card');
      const moreBtn = list.querySelector('.more-btn');
      let showCount = 4;
      let equal = listCards.length - showCount;
  
      if (showCount == listCards.length) {
        moreBtn.style.display = 'none';
      }
  
      for (let i = 4; i < listCards.length; i++) {
        listCards[i].style.display = "none";
      }
  
      moreBtn.addEventListener('click', () => {
        if (equal < 4) {
          showCount += equal;
        } else {
          showCount += 4;
        }
  
        if (showCount <= listCards.length) {
          for (let i = 0; i < showCount; i++) {
            listCards[i].style.display = "block";
          }
        }
  
        if (showCount == listCards.length) {
          moreBtn.style.display = 'none';
        }
      })
    }
  } 

  
  
  