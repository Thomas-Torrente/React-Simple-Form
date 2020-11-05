import React from "react";

const Form = (props) => {
  const whenSubmit = (event) => {
    event.preventDefault();
    // Annumler le rafraichissement de la page a chaque envoie du formulaire
    if (props.password !== props.confirmPassword) {
      alert("Les mots de passe ne sont pas identiques");
      // Si le mot de passe remplie est différent de la confirmation de mot passer alors afficher l'alerte
    } else if (!props.email) {
      alert("L'adresse Email est obligatoire");
      // si le champs de l'email est vide alors afficher l'alerte
    } else {
      props.setForm(true);
      // Dans tous les autres cas lors du clique sur le bouton donc si le formulaire est correcte alors on dit que ???!!!
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={whenSubmit}>
          <h1>Create account</h1>
          <input
            type="text"
            placeholder="Jean Dupont"
            value={props.username}
            //  la variable username ne correspond pour l'instant a rien car le useState n'as pas de valeurs pas défault
            onChange={(event) => {
              props.setUsername(event.target.value);

              // Ducoup la on dit que qu'avec le onChange on modifie la valeuur de l'input username
            }}
          />

          <input
            type="email"
            placeholder="thomas.torrente@gmail.com"
            value={props.email}
            // On dit que la valeur c'est
            onChange={(event) => {
              props.setEmail(event.target.value);
              // Ce que l'user a changer dans la valeur de l'input
            }}
          />

          <input
            type="password"
            placeholder="ThisIsPassword"
            value={props.password}
            onChange={(event) => {
              props.setPassword(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="ThisIsPassword"
            value={props.confirmPassword}
            onChange={(event) => {
              props.setConfirmPassword(event.target.value);
            }}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Form;
