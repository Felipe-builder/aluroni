import cardapio from './itens.json'
import Item from './Item';
import styles from './Itens.module.scss';

export default function Itens() {
  return(
    <div className={styles.itens}>
      {cardapio.map((item) => (
          <Item 
            key={item.id} 
            title={item.title}
            description={item.description}
            photo={item.photo}
            size={item.size}
            serving={item.serving}
            price={item.price}
            id={item.id}
            category={item.category}
          />
      ))}
    </div>
  )
}