import { ImagemEntity } from "src/imagem/entities/imagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'reserva_sala'})
export class ReservaSalaEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nomeSala: String

    @Column()
    localSala: String

    @Column({type : `datetime`})
    dataUso: Date

    @Column()
    horaInicio: String

    @Column()
    horaFinal: String

    @Column()
    nomeResponsavel: String

    @Column()
    motivoUso: String

    @Column()
    informacaoGeral: String

    @Column({type: 'json'})
    convidados: JSON

    @OneToMany(()=> ImagemEntity, (imagem)=> imagem.idSala)
    imagens: ImagemEntity[]

}
