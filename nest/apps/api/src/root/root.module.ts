import { Module } from '@nestjs/common';
import { UiTodoModule } from '@natalia/nest/ui/todo';

@Module({
  imports: [UiTodoModule],
})
export class RootModule {}
