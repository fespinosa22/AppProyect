import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Adminnistrador extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
  })
  pass?: string;

  @property({
    type: 'string',
  })
  nombrepoyec?: string;

  @property({
    type: 'object',
  })
  items?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Adminnistrador>) {
    super(data);
  }
}

export interface AdminnistradorRelations {
  // describe navigational properties here
}

export type AdminnistradorWithRelations = Adminnistrador & AdminnistradorRelations;
