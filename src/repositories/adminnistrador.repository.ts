import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AppadminDataSource} from '../datasources';
import {Adminnistrador, AdminnistradorRelations} from '../models';

export class AdminnistradorRepository extends DefaultCrudRepository<
  Adminnistrador,
  typeof Adminnistrador.prototype.id,
  AdminnistradorRelations
> {
  constructor(
    @inject('datasources.appadmin') dataSource: AppadminDataSource,
  ) {
    super(Adminnistrador, dataSource);
  }
}
