import Card from './Card';

const CardsList = ({ cats }) => {
   const catCards = cats.map(cat => <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} />)

   return (
      <div>
         {catCards}
      </div>
   );
}

export default CardsList;