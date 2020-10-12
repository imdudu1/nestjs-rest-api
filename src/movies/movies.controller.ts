import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'this will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `this will return ${movieId} movie`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateMovieData) {
    return {
      updateMovie: movieId,
      ...updateMovieData,
    };
  }
}
