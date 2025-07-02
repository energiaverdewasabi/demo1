# Energía Verde Wasabi - Landing Page

Una landing page ultra-optimizada para Energía Verde Wasabi con envío automático de emails.

## Configuración de EmailJS

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" (recomendado)
4. Conecta tu cuenta de Gmail (energiaverdewasabi@gmail.com)
5. Copia el **Service ID** que se genera

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Usa este template:

```
Asunto: Nueva consulta desde la web - {{from_name}}

Hola,

Has recibido una nueva consulta desde la web de Energía Verde Wasabi:

Nombre: {{from_name}}
Teléfono: {{from_phone}}
Email: {{from_email}}
Mensaje: {{message}}
Tipo de suministro: {{supply_type}}
Tipo de cliente: {{client_type}}

Responder a: {{reply_to}}

---
Enviado automáticamente desde energiaverdewasabi.com
```

4. Copia el **Template ID** que se genera

### 4. Obtener Public Key
1. Ve a "Account" > "General"
2. Copia tu **Public Key**

### 5. Configurar las credenciales en el código
Edita el archivo `src/components/OptimizedContactForm.tsx` y reemplaza:

```javascript
// Línea 33
emailjs.init("YOUR_PUBLIC_KEY"); // Reemplazar con tu Public Key

// Líneas 58-60
const response = await emailjs.send(
  'YOUR_SERVICE_ID',    // Reemplazar con tu Service ID
  'YOUR_TEMPLATE_ID',   // Reemplazar con tu Template ID
  templateParams
);
```

### 6. Configuración de seguridad (Opcional pero recomendado)
1. En EmailJS, ve a "Account" > "General"
2. En "Allowed domains", añade tu dominio de producción
3. Esto evitará que otros sitios usen tus credenciales

## Características del formulario

- ✅ Envío automático de emails sin backend
- ✅ Validación completa de formularios
- ✅ Mensajes de éxito y error
- ✅ Diseño responsive y optimizado
- ✅ Animaciones suaves
- ✅ Protección contra spam

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Estructura del proyecto

```
src/
├── components/
│   ├── OptimizedContactForm.tsx  # Formulario con EmailJS
│   ├── OptimizedHeader.tsx
│   ├── OptimizedHero.tsx
│   ├── OptimizedBenefits.tsx
│   ├── OptimizedOffer.tsx
│   ├── OptimizedHowItWorks.tsx
│   ├── OptimizedTestimonials.tsx
│   └── OptimizedFooter.tsx
├── App.tsx
└── main.tsx
```

## Tecnologías utilizadas

- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- EmailJS
- Lucide React (iconos)
- Vite

## Optimizaciones implementadas

- Componentes optimizados sin dependencias pesadas
- Lazy loading de animaciones
- Formulario con validación en tiempo real
- Envío automático de emails
- Diseño responsive
- Carga rápida y rendimiento optimizado