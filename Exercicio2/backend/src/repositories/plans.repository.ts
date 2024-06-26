import { PaginationParams } from '@/types/pagination-params'
import { Plan, Prisma } from '@prisma/client'

export interface PlansRepository {
  create(data: Prisma.PlanCreateInput): Promise<Plan>
  update(planId: number, data: Prisma.PlanUpdateInput): Promise<Plan>
  findById(id: number): Promise<Plan | null>
  findAll(pagination: PaginationParams): Promise<Plan[]>
}
