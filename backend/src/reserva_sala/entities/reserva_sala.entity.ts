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

    @Column()
    dataUso: Date

    @Column()
    horaInicio: Date

    @Column()
    horaFinal: Date

    @Column()
    nomeResponsavel: String

    @Column()
    motivoUso: String

    @Column()
    informacaoGeral: String

    @Column()
    convidados: String

    @OneToMany(()=> ImagemEntity, (imagem)=> imagem.idSala)
    imagens: ImagemEntity[]

}
