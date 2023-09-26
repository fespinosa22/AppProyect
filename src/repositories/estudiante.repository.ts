import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AppadminDataSource} from '../datasources';
import {Estudiante, EstudianteRelations} from '../models';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.Id,
  EstudianteRelations
> {
  constructor(
    @inject('datasources.appadmin') dataSource: AppadminDataSource,
  ) {
    super(Estudiante, dataSource);
  }
}
