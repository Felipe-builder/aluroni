import logo from 'assets/logo.svg'
import styles from './Item.module.scss';

interface Props {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
      id: number,
      label: string
    }
}

export default function Item(
    {title, description, photo, size, serving, price, id, category }: Props
  ) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>
            {category.label}
          </div>
          <div className={styles.item__porcao}>
            {size}g
          </div>
          <div className={styles.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
          </div>
          <div className={styles.item__valor}>
            R$ {price.toFixed(2).toString().replace('.', ',') || 'Value is empty'} 
          </div>
        </div>
      </div>
    </div>
  )
}