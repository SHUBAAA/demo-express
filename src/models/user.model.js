import mongoose from 'mongoose';

const estudianteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const mensajeSchema = new mongoose.Schema({
  creadorId: { type: String, required: true },
  contenido: { type: String, required: true },
}, { timestamps: true });

const EstudianteModel = mongoose.model('Estudiante', estudianteSchema);
const MensajeModel = mongoose.model('Mensaje', mensajeSchema);



export { MensajeModel, EstudianteModel };

