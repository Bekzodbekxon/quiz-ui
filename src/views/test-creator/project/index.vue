<template>
  <div>
    <div class="row">
      <div class="col-xl-4 col-lg-12">
        <div class="card">
          <div class="card-body">
            <projects-list/>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-12">
        <div class="card">
          <div class="card-body">
            <strong>Quizzes</strong>
            <quiz-list/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsList from './project-list'
import QuizList from '../../test-creator/quiz/quiz-list'

export default {
  components: {
    ProjectsList,
    QuizList,
  },
}
</script>
