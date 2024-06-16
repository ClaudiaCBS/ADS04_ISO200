import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column()
    nome: String

    @Column({unique: true})
    email: String

    @Column()
    senha: String
}
