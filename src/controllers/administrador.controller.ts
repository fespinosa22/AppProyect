import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Adminnistrador} from '../models';
import {AdminnistradorRepository} from '../repositories';

export class AdministradorController {
  constructor(
    @repository(AdminnistradorRepository)
    public adminnistradorRepository : AdminnistradorRepository,
  ) {}

  @post('/adminnistradors')
  @response(200, {
    description: 'Adminnistrador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Adminnistrador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Adminnistrador, {
            title: 'NewAdminnistrador',
            exclude: ['id'],
          }),
        },
      },
    })
    adminnistrador: Omit<Adminnistrador, 'id'>,
  ): Promise<Adminnistrador> {
    return this.adminnistradorRepository.create(adminnistrador);
  }

  @get('/adminnistradors/count')
  @response(200, {
    description: 'Adminnistrador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Adminnistrador) where?: Where<Adminnistrador>,
  ): Promise<Count> {
    return this.adminnistradorRepository.count(where);
  }

  @get('/adminnistradors')
  @response(200, {
    description: 'Array of Adminnistrador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Adminnistrador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Adminnistrador) filter?: Filter<Adminnistrador>,
  ): Promise<Adminnistrador[]> {
    return this.adminnistradorRepository.find(filter);
  }

  @patch('/adminnistradors')
  @response(200, {
    description: 'Adminnistrador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Adminnistrador, {partial: true}),
        },
      },
    })
    adminnistrador: Adminnistrador,
    @param.where(Adminnistrador) where?: Where<Adminnistrador>,
  ): Promise<Count> {
    return this.adminnistradorRepository.updateAll(adminnistrador, where);
  }

  @get('/adminnistradors/{id}')
  @response(200, {
    description: 'Adminnistrador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Adminnistrador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Adminnistrador, {exclude: 'where'}) filter?: FilterExcludingWhere<Adminnistrador>
  ): Promise<Adminnistrador> {
    return this.adminnistradorRepository.findById(id, filter);
  }

  @patch('/adminnistradors/{id}')
  @response(204, {
    description: 'Adminnistrador PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Adminnistrador, {partial: true}),
        },
      },
    })
    adminnistrador: Adminnistrador,
  ): Promise<void> {
    await this.adminnistradorRepository.updateById(id, adminnistrador);
  }

  @put('/adminnistradors/{id}')
  @response(204, {
    description: 'Adminnistrador PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() adminnistrador: Adminnistrador,
  ): Promise<void> {
    await this.adminnistradorRepository.replaceById(id, adminnistrador);
  }

  @del('/adminnistradors/{id}')
  @response(204, {
    description: 'Adminnistrador DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.adminnistradorRepository.deleteById(id);
  }
}
