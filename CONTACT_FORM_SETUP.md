# Configuration du Formulaire de Contact

## 🎯 Vue d'ensemble
Un formulaire de contact fonctionnel a été ajouté à votre page de contact. Il utilise **EmailJS** pour envoyer les messages directement vers votre adresse email professionnelle sans nécessiter de backend complexe.

## 📋 Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (cliquez sur "Sign Up")
3. Complétez votre inscription

### 2. Configurer un service email
1. Dans votre tableau de bord EmailJS, allez à **Email Services**
2. Cliquez sur **Add Service**
3. Sélectionnez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Copiez votre Service ID** (vous en aurez besoin bientôt)

### 3. Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Subject: {{subject}}

De: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Répondre à: {{reply_to}}
```

4. Testez votre template
5. **Copiez votre Template ID**

### 4. Obtenir votre clé publique
1. Allez dans **Account**
2. Onglet **API Keys**
3. **Copiez votre Public Key**

### 5. Mettre à jour le code
Dans le fichier [js/main.js](js/main.js), remplacez les 3 valeurs suivantes :

```javascript
emailjs.init('IoGmO9_7-datRxN4T');  // Ligne ~68
```
Remplacez `YOUR_PUBLIC_KEY` par votre **Public Key** d'EmailJS

```javascript
await emailjs.send('service_l5lwzun', 'template_yep2p1e', {
  to_email: 'aune.amaury1@gmail.com', // Remplacez ici aussi
```

Remplacez :
- `YOUR_SERVICE_ID` par votre **Service ID**
- `YOUR_TEMPLATE_ID` par votre **Template ID**
- `votre.email.pro@exemple.com` par votre **adresse email professionnelle**

## ✅ Vérification du fonctionnement

1. Allez sur votre page de contact
2. Remplissez le formulaire avec des données de test
3. Cliquez sur "Envoyer"
4. Vérifiez que le message apparaît dans votre boîte email

## 🎨 Personnalisation

### Modifier le template d'email
Si vous voulez changer le format du message reçu, éditez votre template dans [Email Templates](https://dashboard.emailjs.com/admin/templates) sur EmailJS.

### Modifier le message de succès/erreur
Modifiez les textes dans [js/main.js](js/main.js) aux lignes ~88 et ~96 :
```javascript
formMessage.textContent = '✅ Message envoyé avec succès! Je vous répondrai rapidement.';
```

### Ajouter des champs au formulaire
1. Ajoutez un nouveau `<input>` ou `<textarea>` dans [html/contact.html](html/contact.html)
2. Utilisez le même format avec `id` et `name`
3. Ajoutez le champ au formulaire de données dans `main.js`
4. Mettez à jour votre template EmailJS si nécessaire

## 🔒 Sécurité

- Votre clé publique EmailJS est publique (elle doit l'être)
- Votre Service ID et Template ID sont publics (normal sur EmailJS)
- Votre email est protégé par les serveurs EmailJS (gratuit jusqu'à 200 emails/mois)

## 📞 Support

- Documentation EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Forum EmailJS: [https://www.emailjs.com/community/](https://www.emailjs.com/community/)

