<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8">
      <v-card>
        <v-card-title class="headline">
          タスクのサブタスク化<br>アプリケーション
        </v-card-title>
        <v-card-text>
          <p>
            タスクが現状の問題解決では解決できないケースがあります。
          </p>
          <p>
            問題解決としてのリソースを利用するケースにおいて、サービスの利用と評価を見やすくするためのツールです。
          </p>
          <p>
            個人をベースにしているため、共有ではなく相談することをベースにコミュケーションを行います。
          </p>
          <p>
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Cognitive Flow</small></em>
          </div>
          <hr class="my-3" />
          <img src="/images/home-network.svg" alt="network">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/flowUser"> Go App Page </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
