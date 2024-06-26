import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('series')
export class Series {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({ type: 'varchar', length: 250, nullable: false })
    titulo: string;


    @Column({ type: 'varchar', length: 5000, nullable: false })
    sinopsis: string;


    @Column({ type: 'varchar', length: 100, nullable: false })
    director: string;




    @Column()
    temporada: number;

    @Column({ type: 'varchar', length: 100, nullable: false, name: 'pais_origen' })
    paisOrigen: string;

    @Column({ name: 'fecha_estreno',type: 'varchar', length: 10, nullable: false  })
    fechaEstreno: string;

}
