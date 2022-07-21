// @/models.ts
import { table } from "console";
import { Table, Model, Column, DataType } from "sequelize-typescript";
@Table({
  timestamps:false,
  tableName:"subhistory",
})
export class subhistory extends Model{
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value1!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value2!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  result!: string;
}