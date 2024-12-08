import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText} from '@mui/material';
import './Login.css'

const Login = () => {
    const [login, setLogin] = useState('');
    return (
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login}
           onChange={e => { setLogin(e.target.value) }} />
          <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
        </FormControl>
      </Grid>
    )

  const [menuItems] = useState([
    {
      category: "Entradas",
      items: [
        { name: "Salada Caesar", price: "R$ 20,00" },
        { name: "Sopa de Cebola", price: "R$ 15,00" },
      ],
    },
    {
      category: "Pratos Principais",
      items: [
        { name: "Filé Mignon com Fritas", price: "R$ 45,00" },
        { name: "Frango Grelhado", price: "R$ 35,00" },
      ],
    },
    {
      category: "Sobremesas",
      items: [
        { name: "Petit Gâteau", price: "R$ 25,00" },
        { name: "Torta de Limão", price: "R$ 20,00" },
      ],
    },
  ]);
    <div className="menu-container">
      <h1>Cardápio do Restaurante</h1>
      {menuItems.map((category, index) => (
        <div key={index} className="menu-category">
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
}




export default Login;