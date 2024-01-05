import { Table, Column, PrimaryKey, DataType, OneToMany, OneToOne, ManyToMany, DBTypes} from 'myorm_pg';


@Table("pessoas")
export class User
{
   
    @PrimaryKey()
    @Column()
    @DataType(DBTypes.SERIAL)
    public Id : number;

    
    @Column()
    public Nome : string;

    @Column()
    public Email : string;

   

  
    constructor(nome : string = "", email : string = "")
    {
        this.Id = -1;
        this.Nome = nome;
        this.Email = email;
              
    }
}