package com.coala.backend.community.freepost.db.entity;

import com.coala.backend.member.db.entity.Member;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class FreeComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = FreePost.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "fp_id")
    @NotNull
    private FreePost fpId;

    @NotNull
    private String memberId;

    @NotNull
    private String author;

    @NotNull
    private String content;

    @Column(updatable = false, name = "create_at")
    private LocalDateTime createAt;
    @Column(name = "update_at")
    private LocalDateTime updateAt;

    @PrePersist
    public void prePersist() {
        createAt = LocalDateTime.now();
    }

    @Builder
    public FreeComment(FreePost fpId, String author, String content, Member memberId) {
        this.fpId = fpId;
        this.author = author;
        this.memberId = memberId.getEmail();
        this.content = content;
    }

    public void updateFreeComment(String author, String content) {
        this.author = author;
        this.content = content;
        this.updateAt = LocalDateTime.now();
    }
}