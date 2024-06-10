import { ReservaSalaEntity } from "src/reserva_sala/entities/reserva_sala.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'imagem'})
export class ImagemEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nomeImagem: String

    @Column()
    tipoArquivo: String

    @Column()
    tamanhoArquivo: number

    @Column()
    url: String

    @ManyToOne(()=> ReservaSalaEntity, (sala)=> sala.imagens)
    idSala: number
}
