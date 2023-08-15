package com.coala.backend.techpost.db.entity;

import com.coala.backend.member.db.entity.Member;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/*
- 추천 수 기능 미구현
* */
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TechPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "member_id", referencedColumnName = "email")
    @NotNull
    private Member memberId;

    @NotNull
    private String title;

    @Lob
    @NotNull
    private String detail;

    @Column(updatable = false, name = "create_at")
    private LocalDateTime createAt;
    @Column(name = "update_at")
    private LocalDateTime updateAt;

    @Column(name = "image_path")
    private String imagePath;

     // 왜 참조가 안되지?
    @ManyToOne(targetEntity = Member.class)
    @JoinColumn(name = "nickname")
    private Member nickname;

    @Column(columnDefinition = "integer default 0")
    @NotNull
    private int views;

    @Column
    @NotNull
    private int commentCount;

    @Column
    @NotNull
    private int goodCount;

    @OneToMany(mappedBy = "tpId", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<TechGood> goods = new ArrayList<>();

    @OneToMany(mappedBy = "tpId", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<TechComment> comments = new ArrayList<>();

    @Builder
    public TechPost(Member memberId, String title, String detail , String imagePath, Member nickname) {
        this.memberId = memberId;
        this.title = title;
        this.detail = detail;
        this.imagePath = imagePath;
        this.nickname = nickname;
        this.commentCount = this.getComments().size();
        this.goodCount = this.getGoods().size();
    }

    @PrePersist
    public void prePersist() {
        createAt = LocalDateTime.now();
    }

    public void updateTechPost(String title, String detail, String imagePath, Member nickname) {
        this.title = title;
        this.detail = detail;
        this.updateAt = LocalDateTime.now();
        this.imagePath = imagePath;
        this.nickname = nickname;
    }

    public void views() {
        this.views++;
    }
}
